import { RingingBellButton } from "@/components/buttons/animated/RingingBellButton";
import { CardInvite } from "@/components/card/CardInvite";
import BaseInput from "@/components/inputs/BaseInput";
import ProductsSection from "@/components/products/productCard/ProductsSection";
import { BaseText } from "@/components/text/BaseText";
import { Product } from "@/data/Product";
import { useGetProducts } from "@/hooks/useGetProducts";
import { useLocalStore } from "@/store/localStore";
import { colors } from "@/theme/colors";
import { fontSizes } from "@/utils/dimensions";
import Icons from "@/utils/icons";
import { useRouter } from "expo-router";
import { useCallback, useMemo, useState } from "react";
import { ActivityIndicator, Alert, Platform, ScrollView, Share, StyleSheet, View } from "react-native";
import Animated, { FadeIn, FadeInUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function OverviewScreen () {

	const router = useRouter()
	const { top } = useSafeAreaInsets();

	const { productsData, isLoading } = useGetProducts();

	const favorites = useLocalStore(state => state.favorites);
	const toggleFavoriteProduct = useLocalStore(state => state.toggleFavoriteProduct);


	const [searchInput, setSearchInput] = useState<string>('');

	const filteredProducts = useMemo(() => {
		return productsData.filter(product =>
			product.title.toLowerCase().includes(searchInput.toLowerCase())
		);
	}, [searchInput, productsData]);

	const filteredFavorites = useMemo(() => {
		return favorites.filter(product =>
			product.title.toLowerCase().includes(searchInput.toLowerCase())
		);
	}, [searchInput, favorites]);

	const onProductPressed = useCallback((product: Product) => {
		router.push({
			pathname: "/(protected)/product/[id]",
			params: {
				id: product.id.toString(),
			}
		})
	}, [])

	const onFavoriteToggle = useCallback((product: Product) => {
		toggleFavoriteProduct(product);
	}, [toggleFavoriteProduct]);

	const showInfoToast = useCallback(() => {
		Toast.show({
			'type': 'info',
			'text1': 'Not implemented'
		})
	}, [])

	const onAllProductsPressed = () => {
		showInfoToast()
	}

	const onAllFavoritesPressed = () => {
		showInfoToast()
	}

	const onInviteButtonPressed = async () => {
		try {
			const result = await Share.share({ message: 'Share options' });
			if (result.action === Share.dismissedAction) {
				console.log(`share dismissed`);
			} else {
				console.log(`shared`);
			}
		} catch (error: any) {
			Alert.alert(error.message);
		}
	}

	return (
		<ScrollView
			style={[styles.container, { paddingTop: top }]}
			contentContainerStyle={[styles.contentContainer, Platform.OS === 'android' ? { paddingBottom: 60 } : {}]}
			showsVerticalScrollIndicator={false}>

			<View style={styles.topSectionContainer}>
				<View style={styles.creditsContainer}>
					<View style={styles.coinHolder}>
						<Icons.Coin />
					</View>
					<BaseText style={styles.creditsText}>512 credits</BaseText>
				</View>

				<RingingBellButton />
			</View>

			<BaseInput
				style={styles.searchInput}
				value={searchInput}
				onChangeValue={setSearchInput}
				placeholder="Search for products"
				icon={<Icons.Search />} />

			<View style={styles.productsContainer}>

				{isLoading ?
					<Animated.View entering={FadeIn.duration(200)}>
						<ActivityIndicator />
					</Animated.View> :
					<Animated.View entering={FadeInUp.duration(400)}>
						<ProductsSection
							data={filteredProducts}
							headline="New products"
							onProductPressed={onProductPressed}
							onFavoriteButtonPressed={onFavoriteToggle}
							onViewAllButtonPressed={onAllProductsPressed} />
					</Animated.View>}

				{favorites.length > 0 &&
					<Animated.View entering={FadeInUp.duration(400)} >
						<ProductsSection
							data={filteredFavorites}
							headline="Favorite products"
							onProductPressed={onProductPressed}
							onFavoriteButtonPressed={onFavoriteToggle}
							onViewAllButtonPressed={onAllFavoritesPressed} />
					</Animated.View>}
			</View>

			<CardInvite onInviteButtonPressed={onInviteButtonPressed} />


		</ScrollView>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		paddingBottom: 20
	},
	topSectionContainer: {
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 24,
		paddingHorizontal: 16
	},
	creditsContainer: {
		flexDirection: "row",
		backgroundColor: colors.white,
		alignItems: 'center',
		borderRadius: 999,
		paddingLeft: 4,
		paddingRight: 12,
	},
	coinHolder: {
		backgroundColor: colors.primary,
		padding: 8,
		borderRadius: 100,
		marginEnd: 10
	},
	creditsText: {
		fontWeight: '400',
		fontSize: fontSizes.body2,
		paddingVertical: 13
	},
	searchInput: {
		marginHorizontal: 16
	},
	productsContainer: {
		marginVertical: 40,
		gap: 40
	}
}) 