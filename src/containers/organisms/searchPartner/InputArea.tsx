import { useEffect, useState, VFC } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { AppState } from "@store/reducers";
import { dispatchers } from "@store/dispatchers";
import { SetPartnerInfoState } from "@store/setPartnerInfo/reducer";
import { setLoadingUIDispatcher } from "@store/setLoadingUI/dispatcher";
import { decidePartnerInfo, PartnerInfoType } from "@utils/decidePartnerInfo";
import { InputArea } from "@components/organisms/searchPartner/InputArea";
import { useFormik } from "formik";
import html2canvas from "html2canvas";

export const EnhancedInputArea: VFC = () => {
	/** state */
	const partnerInfoState = useSelector<AppState, SetPartnerInfoState>(
		(state) => state.searchPartner.partnerInfo,
		shallowEqual
	);

	/** dispatchers */
	const dispatch = useDispatch();
	const { searchPartner } = dispatchers;
	const setPartnerInfo = (
		inputName: string,
		partnerInfo: PartnerInfoType
	): void => {
		searchPartner.setPartnerInfoDispatcher(dispatch)(inputName, partnerInfo);
	};
	const fetchPokeData = (partnerNo: number): void => {
		searchPartner.searchPartnerGetPokeDataDispatcher(dispatch)(partnerNo);
	};
	const fetchPartnerPokeSpecies = (partnerNo: number): void => {
		searchPartner.searchPartnerGetPokeSpeciesDispatcher(dispatch)(partnerNo);
	};
	const setLoadingUI = (state: boolean): void => {
		setLoadingUIDispatcher(dispatch)(state);
	};

	/** define for React Router Hooks */
	const H = useHistory();
	const useQuery = (): URLSearchParams =>
		new URLSearchParams(useLocation().search);
	const query = useQuery();

	useEffect(() => {
		const name = query.get("name");

		/** add Query Strings if store have searchPartner State */
		if (partnerInfoState.inputName && !name) {
			H.replace(`/partner?name=${partnerInfoState.inputName}`);
			return;
		}

		/** show search result if URL has query */
		if (name) {
			const partnerInfo = decidePartnerInfo(name);
			setPartnerInfo(name, partnerInfo);
			fetchPokeData(partnerInfo.pokeNo);
			fetchPartnerPokeSpecies(partnerInfo.pokeNo);
		}
	}, []);

	/**
	 * fire this function when you click Fix Button
	 */
	const searchPartnerPoke = (value: { inputText: string }): void => {
		if (!value.inputText) return;
		setLoadingUI(true);
		const partnerInfo = decidePartnerInfo(value.inputText);
		setPartnerInfo(value.inputText, partnerInfo);
		fetchPokeData(partnerInfo.pokeNo);
		fetchPartnerPokeSpecies(partnerInfo.pokeNo);
		H.replace(`/partner?name=${value.inputText}`);
	};

	const formik = useFormik({
		initialValues: { inputText: `${partnerInfoState.inputName}` },
		validationSchema: null,
		onSubmit: searchPartnerPoke
	});

	// html2canvas で得られる URI を用いてダウンロードさせる関数
	const saveAsImage = (uri: string) => {
		const downloadLink = document.createElement("a");

		downloadLink.href = uri;

		// ファイル名
		downloadLink.download = `partner_${partnerInfoState.inputName}.png`;

		// Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
		document.body.appendChild(downloadLink);

		// ダウンロードリンクが設定された a タグをクリック
		downloadLink.click();

		// Firefox 対策で追加したリンクを削除しておく
		document.body.removeChild(downloadLink);
	};

	const exportPng = () => {
		// 画像に変換する component の id を指定
		const target = document.getElementById("target-component");
		if (!target) return;
		html2canvas(target, {
			scale: 1
		}).then((canvas) => {
			const targetImgUri = canvas.toDataURL();

			saveAsImage(targetImgUri);
		});
	};

	const [DLBtnDisabled, setDisabled] = useState(true);

	useEffect(() => {
		if (partnerInfoState.inputName) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [partnerInfoState]);

	return (
		<InputArea
			{...{
				searchPartner: searchPartnerPoke,
				formik,
				exportPng,
				DLBtnDisabled
			}}
		/>
	);
};
