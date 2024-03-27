const recipes = [
    {
        id: 1,
        name: 'Spaghetti Bolognese',
        cuisine: 'Italian',
        category: 'Main Course',
        description: 'A classic Italian dish featuring spaghetti pasta tossed in a rich tomato-based Bolognese sauce, made with ground beef, onions, garlic, and seasoned with salt and pepper. Optionally topped with grated Parmesan cheese.',
        ingredients: [
            'Spaghetti pasta',
            'Ground beef',
            'Tomato sauce',
            'Onion',
            'Garlic',
            'Olive oil',
            'Salt',
            'Pepper',
            'Parmesan cheese (optional)'
        ],
        instructions: [
            'Heat olive oil in a pan over medium heat.',
            'Add minced garlic and chopped onion, and cook until softened.',
            'Add ground beef and cook until browned.',
            'Pour in tomato sauce and season with salt and pepper. Simmer for 15-20 minutes.',
            'Meanwhile, cook spaghetti pasta according to package instructions until al dente.',
            'Serve the spaghetti with the bolognese sauce on top. Sprinkle with grated Parmesan cheese if desired.'
        ],
        image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        name: 'Chicken Stir Fry',
        cuisine: 'Asian',
        category: 'Main Course',
        description: 'A flavorful Asian dish made with tender chicken strips stir-fried with colorful bell peppers, broccoli, and carrots, then tossed in a savory sauce made with soy sauce and hoisin sauce. Best served hot with rice.',
        ingredients: [
            'Chicken breast',
            'Bell peppers',
            'Broccoli',
            'Carrots',
            'Soy sauce',
            'Hoisin sauce',
            'Garlic',
            'Ginger',
            'Vegetable oil',
            'Rice (optional)'
        ],
        instructions: [
            'Slice chicken breast into thin strips and marinate with soy sauce, minced garlic, and grated ginger.',
            'Heat vegetable oil in a wok or skillet over high heat.',
            'Add marinated chicken and stir-fry until cooked through.',
            'Add chopped vegetables (bell peppers, broccoli, carrots) and continue stir-frying until vegetables are tender-crisp.',
            'Pour in hoisin sauce and toss everything together until well coated.',
            'Serve hot with rice, if desired.'
        ],
        image: 'https://images.unsplash.com/photo-1543826173-70651703c5a4?q=80&w=2679&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 3,
        name: 'Classic Margherita Pizza',
        cuisine: 'Italian',
        category: 'Main Course',
        description: 'A traditional Italian pizza topped with sliced tomatoes, fresh mozzarella cheese, and fragrant basil leaves, drizzled with olive oil, and seasoned with salt and black pepper. Baked until the crust is golden brown and the cheese is bubbly.',
        ingredients: [
            'Pizza dough',
            'Tomatoes',
            'Fresh mozzarella cheese',
            'Fresh basil leaves',
            'Olive oil',
            'Salt',
            'Black pepper'
        ],
        instructions: [
            'Preheat your oven to the highest temperature (usually around 500°F or 260°C).',
            'Roll out the pizza dough on a lightly floured surface to your desired thickness.',
            'Transfer the dough to a pizza pan or baking sheet.',
            'Drizzle olive oil over the dough and spread it evenly with your hands.',
            'Slice tomatoes and fresh mozzarella cheese thinly.',
            'Arrange the tomato slices and mozzarella cheese over the pizza dough.',
            'Season with salt and black pepper, then top with fresh basil leaves.',
            'Bake in the preheated oven for about 10-12 minutes or until the crust is golden brown and the cheese is bubbly.',
            'Slice and serve hot.'
        ],
        image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 4,
        name: 'Chocolate Chip Cookies',
        cuisine: 'American',
        category: 'Dessert',
        description: 'Classic American cookies loaded with chocolate chips, made with a simple dough of flour, butter, sugars, and vanilla extract. Baked until golden brown and chewy, perfect for satisfying your sweet tooth.',
        ingredients: [
            'All-purpose flour',
            'Baking soda',
            'Salt',
            'Unsalted butter',
            'Granulated sugar',
            'Brown sugar',
            'Egg',
            'Vanilla extract',
            'Chocolate chips'
        ],
        instructions: [
            'Preheat your oven to 375°F (190°C).',
            'In a small bowl, whisk together the flour, baking soda, and salt.',
            'In a large mixing bowl, beat together the butter, granulated sugar, and brown sugar until creamy.',
            'Add the egg and vanilla extract to the butter-sugar mixture and beat until well combined.',
            'Gradually add the flour mixture to the wet ingredients, mixing until just combined.',
            'Stir in the chocolate chips.',
            'Drop rounded tablespoons of dough onto ungreased baking sheets, spacing them about 2 inches apart.',
            'Bake for 9-11 minutes or until the edges are golden brown.',
            'Let the cookies cool on the baking sheets for a few minutes before transferring them to wire racks to cool completely.'
        ],
        image: 'https://images.unsplash.com/photo-1593231060852-5f040ae7df82?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 5,
        name: 'Caesar Salad',
        cuisine: 'American',
        category: 'Salad',
        description: 'A classic salad featuring crisp romaine lettuce tossed in creamy Caesar dressing, topped with grated Parmesan cheese and crunchy croutons. Optionally garnished with lemon juice and anchovy fillets for an extra burst of flavor.',
        ingredients: [
            'Romaine lettuce',
            'Caesar dressing',
            'Parmesan cheese',
            'Croutons',
            'Lemon juice',
            'Olive oil',
            'Anchovy fillets (optional)'
        ],
        instructions: [
            'Wash and dry the romaine lettuce, then tear it into bite-sized pieces and place it in a large salad bowl.',
            'In a small bowl, whisk together the Caesar dressing, lemon juice, and olive oil.',
            'Drizzle the dressing over the lettuce and toss to coat evenly.',
            'Add grated Parmesan cheese and croutons to the salad and toss again.',
            'If using anchovy fillets, chop them finely and add them to the salad.',
            'Serve immediately.'
        ],
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 6,
        name: 'Tomato Soup',
        cuisine: 'American',
        category: 'Soup',
        description: 'A comforting and hearty soup made with ripe tomatoes, onions, and garlic, simmered in vegetable broth and blended until smooth. Finished with a touch of fresh basil and optionally enriched with heavy cream for extra creaminess.',
        ingredients: [
            'Tomatoes',
            'Vegetable broth',
            'Onion',
            'Garlic',
            'Olive oil',
            'Salt',
            'Black pepper',
            'Fresh basil leaves',
            'Heavy cream (optional)'
        ],
        instructions: [
            'Heat olive oil in a large pot over medium heat.',
            'Add minced garlic and chopped onion, and cook until softened.',
            'Add chopped tomatoes (fresh or canned) and vegetable broth to the pot.',
            'Season with salt and black pepper, then bring to a simmer and cook for about 20 minutes.',
            'Use an immersion blender to blend the soup until smooth. (Alternatively, transfer the soup in batches to a blender and blend until smooth.)',
            'Stir in chopped fresh basil leaves and heavy cream (if using), and simmer for another 5 minutes.',
            'Taste and adjust seasoning if needed.',
            'Serve hot, optionally garnished with additional basil leaves or a drizzle of olive oil.'
        ],
        image: 'https://images.unsplash.com/photo-1620418029653-f708dd37096a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];
export default recipes;
