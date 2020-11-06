import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as styles from "@styles/baseStyle";
import { AppState } from "@js/reducers/index";
import { Dispatch } from "redux";
import { fetchData } from "@js/actions/SearchPartner/decidePartner";
import { login } from "@js/actions/SearchPartner/login";
import { userInfo } from "@js/types/commonTypes";
import InputArea from "./InputArea";
import OutputArea from "./OutputArea";
import Login from "./Login";

type StateProps = {
	inputName: string;
	nijiData: userInfo;
	partnerNo: number;
	isDecision: boolean;
	// isLogin: boolean;
};

type DispatchProps = {
	decidePartner: typeof fetchData;
	// login: typeof login;
};

type Props = StateProps & DispatchProps;

const ContentArea = styled(styles.BaseContentArea)``;

const SearchPartner = (props: Props): JSX.Element => {
	return (
		<ContentArea>
			{/* NIJIBOX_社員APIを使用しない場合はLoginコンポーネントをコメントアウト */}
			{/* <Login
        login={props.login}
        isLogin={props.isLogin}
      /> */}

			<InputArea
				decidePartner={props.decidePartner}
				nijiData={props.nijiData}
			/>

			{props.isDecision && (
				<OutputArea
					inputName={props.inputName}
					nijiData={props.nijiData}
					partnerNo={props.partnerNo}
				/>
			)}
		</ContentArea>
	);
};

const mapStateToProps = (state: AppState): StateProps => ({
	inputName: state.partner.inputName,
	nijiData: state.partner.nijiData,
	partnerNo: state.partner.partnerNo,
	isDecision: state.partner.isDecision
	// isLogin: state.login.isLogin
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	decidePartner: (inputName: string) => dispatch(fetchData(inputName))
	// login: () => dispatch(login())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPartner);
