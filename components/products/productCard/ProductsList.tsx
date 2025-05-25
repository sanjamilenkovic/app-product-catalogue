import { Product } from "@/data/Product"
import { FlatList, View } from "react-native"
import ProductCard from "./ProductCard"

interface ProductsListProps {
	data: Product[]
	isHorizontal?: boolean
	onProductPressed: (product: Product) => void
	onFavoriteButtonPressed: (product: Product) => void
}

export function ProductsList ({ data, isHorizontal, onProductPressed, onFavoriteButtonPressed }: ProductsListProps) {
	return (
		<FlatList
			data={data}
			renderItem={({ item }: { item: Product }) => {
				return (
					<View style={isHorizontal ? { width: 324, marginEnd: 16 } : {}}>
						<ProductCard
							product={item}
							onFavoriteButtonPressed={() => onFavoriteButtonPressed(item)}
							onProductPressed={() => onProductPressed(item)} />
					</View>
				)
			}}
			horizontal={isHorizontal}
			showsVerticalScrollIndicator={false}
			showsHorizontalScrollIndicator={false}
			keyExtractor={(item) => item.id.toString()} />)
}