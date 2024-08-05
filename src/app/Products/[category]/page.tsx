import { useRouter } from 'next/router';
import { categories } from '@/data'; // Ensure the import path is correct

function CategoryPage() {
    const router = useRouter();
    const { categoryName } = router.query; // Destructure categoryName from the query object

    // Find the matching category based on the categoryName from the URL
    const category = categories.find(cat => cat.name.toLowerCase() === (categoryName as string)?.toLowerCase());

    if (!category) {
        return <div>Category not found</div>;
    }

    return (
        <div>
            <h1>{category.name}</h1>
            <p>{category.desc}</p>
            <h2>Cuts</h2>
            <ul>
                {category.cuts.map(cut => (
                    <li key={cut.name}>
                        <h3>{cut.name}</h3>
                        <p>{cut.description}</p>
                        <p>Price: ${cut.price.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryPage;
