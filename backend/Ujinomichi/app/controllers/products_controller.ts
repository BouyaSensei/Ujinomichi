import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class ProductsController {
  public async createProductTest({ request, response }: HttpContext) {
    // Produits pour la catégorie "Alcool"
    await Product.create({
      name: 'Sake Nikkô',
      description: 'Un saké traditionnel à base de riz fermenté, produit dans les monts Fuji.',
      price: 35.99,
      stock_quantity: 20,
      image_url: '/images/alcool/sake-nikko.jpg',
      type: 'alcool',
    })
    await Product.create({
      name: 'Shōchū Iichiko',
      description: 'Un alcool à base de blé et de pommes de terre, très populaire au Japon.',
      price: 24.99,
      stock_quantity: 30,
      image_url: '/images/alcool/sochu-iichiko.jpg',
      type: 'alcool',
    })
    await Product.create({
      name: 'Happoshu',
      description: 'Une bière légère et fruitée, moins alcoolisée que les bières classiques.',
      price: 12.99,
      stock_quantity: 50,
      image_url: '/images/alcool/happoshu.jpg',
      type: 'alcool',
    })
    await Product.create({
      name: 'Nikka From The Barrel',
      description: 'Un whisky japonais emblématique, produit dans la région de Hokkaido.',
      price: 49.99,
      stock_quantity: 15,
      image_url: '/images/alcool/nikka-whisky.jpg',
      type: 'alcool',
    })
    await Product.create({
      name: 'Touki',
      description: 'Un cocktail traditionnel à base de sake, citron vert et gingembre.',
      price: 29.99,
      stock_quantity: 25,
      image_url: '/images/alcool/touki-cocktail.jpg',
      type: 'alcool',
    })
    // Produits pour la catégorie "Saisons"
    await Product.create({
      name: 'Cider Pressé',
      description: "Un cidre fruité et frais, parfait pour l'automne.",
      price: 18.99,
      stock_quantity: 40,
      image_url: '/images/saisons/cider-pressé.jpg',
      type: 'saisons',
    })
    await Product.create({
      name: 'Punch Noël',
      description: "Un punch à base de fruits rouges et d'épices, idéal pour les fêtes.",
      price: 25.99,
      stock_quantity: 30,
      image_url: '/images/saisons/punch-noel.jpg',
      type: 'saisons',
    })
    await Product.create({
      name: 'Limonade Printanière',
      description: 'Une limonade légère et fruitée avec des notes de citron vert.',
      price: 15.99,
      stock_quantity: 60,
      image_url: '/images/saisons/limonade-printaniere.jpg',
      type: 'saisons',
    })
    await Product.create({
      name: 'Thermos Chocolat',
      description: 'Un thermos de chocolat chaud avec des copeaux de cacao.',
      price: 29.99,
      stock_quantity: 20,
      image_url: '/images/saisons/thermos-chocolat.jpg',
      type: 'saisons',
    })
    await Product.create({
      name: 'Pamplemousse Glacé',
      description: 'Un cocktail à base de pamplemousse, menthe et glace pilée.',
      price: 24.99,
      stock_quantity: 35,
      image_url: '/images/saisons/pamplemousse-glace.jpg',
      type: 'saisons',
    })
    // Produits pour la catégorie "Thé"
    await Product.create({
      name: 'Matcha Genmaicha',
      description: 'Un mélange de matcha et de thé vert au riz, typique du Japon.',
      price: 14.99,
      stock_quantity: 60,
      image_url: '/images/tea/matcha-genmaicha.jpg',
      type: 'thé',
    })

    await Product.create({
      name: 'Oolong Tieguanyin',
      description:
        "Un oolong japonais à base de feuilles d'arbre, produit dans la région de Shizuoka.",
      price: 12.99,
      stock_quantity: 70,
      image_url: '/images/tea/oolong-tieguanyin.jpg',
      type: 'thé',
    })

    await Product.create({
      name: 'Hōjicha Genmaicha',
      description: "Un mélange de thé vert torréfié et de riz, idéal pour l'automne.",
      price: 18.99,
      stock_quantity: 50,
      image_url: '/images/tea/hojicha-genmaicha.jpg',
      type: 'thé',
    })

    await Product.create({
      name: 'Yuzu Green Tea',
      description: 'Un thé vert à la citronnelle yuzu, frais et acidulé.',
      price: 13.99,
      stock_quantity: 75,
      image_url: '/images/tea/yuzu-green-tea.jpg',
      type: 'thé',
    })

    await Product.create({
      name: 'Ume Sencha',
      description: "Un thé vert à la cerise (ume), parfait pour l'été.",
      price: 16.99,
      stock_quantity: 65,
      image_url: '/images/tea/ume-sencha.jpg',
      type: 'thé',
    })
    // Produits pour la catégorie "Découverte"
    await Product.create({
      name: 'Matcha Latte',
      description:
        'Une poudre de matcha à mélanger avec du lait, pour préparer une latte crémeuse.',
      price: 17.99,
      stock_quantity: 50,
      image_url: '/images/decouvert/matcha-latte.jpg',
      type: 'découverte',
    })

    await Product.create({
      name: 'Rice Wine',
      description: 'Un vin de riz fermenté, produit dans la région de Kyoto.',
      price: 24.99,
      stock_quantity: 40,
      image_url: '/images/decouvert/rice-wine.jpg',
      type: 'découverte',
    })

    await Product.create({
      name: 'Hōjicha',
      description: 'Un thé vert torréfié, idéal pour les amateurs de saveurs caramélisées.',
      price: 12.99,
      stock_quantity: 70,
      image_url: '/images/decouvert/hojicha-the.jpg',
      type: 'découverte',
    })

    await Product.create({
      name: 'Ume Shiso',
      description: 'Un mélange de thé à la cerise (ume) et au basilic shiso.',
      price: 21.99,
      stock_quantity: 30,
      image_url: '/images/decouvert/ume-shiso.jpg',
      type: 'découverte',
    })

    await Product.create({
      name: 'Amazake',
      description: 'Une boisson sucrée à base de riz fermenté, traditionnelle au Japon.',
      price: 19.99,
      stock_quantity: 50,
      image_url: '/images/decouvert/amazake.jpg',
      type: 'découverte',
    })
  }
  public async getAllProducts() {
    const products = await Product.all()
    return products
  }
  public async getLastProducts() {
    const products = await Product.query().orderBy('created_at', 'desc').limit(5)
    return products
  }
  public async getSingleProduct(query: { params: { id: number } }) {
    const product = await Product.findOrFail(query.params.id)
    return product
  }
}
