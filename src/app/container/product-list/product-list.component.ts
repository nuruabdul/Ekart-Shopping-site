import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
             // Reference var on a component. Displaying details of a selected product once clicked.
            //  Check product.ts,product component,and product-list, the product specifications in product.ts originated here.
  selectedProduct: Product;
  products = [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      discountPrice:140,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 2,
      name: "Nike React Miler",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 130,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg",
      slug: "nike-react-miler"
    },
    {
      id: 3,
      name: "Nike Air Zoom Pegasus 37",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black", "Brown", "Red"],
      price: 120,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
      slug: "nike-air-zoom-pegasus-37"
    },
    {
      id: 4,
      name: "Nike Joyride Run Flyknit",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", , "Brown", "Red"],
      price: 180,
      discountPrice:140,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",
      slug: "nike-joyride-run-flyknit"
    },
    {
      id: 5,
      name: "Nike Mercurial Vapor 13 Elite FG",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "FOOTBALL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 250,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg",
      slug: "nike-mercurial-vapor-13-elite-fg"
    },
    {
      id: 6,
      name: "Nike Phantom Vision Elite Dynamic Fit FG",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "FOOTBALL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 150,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg",
      slug: "nike-phantom-vision-elite-dynamic-fit-fg"
    },
    {
      id: 7,
      name: "Nike Phantom Venom Academy FG",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "WOMEN",
      category: "FOOTBALL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Brown", "Red", "Black"],
      price: 80,
      discountPrice:60,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/whegph8z9ornhxklc8rp/phantom-venom-academy-fg-firm-ground-soccer-cleat-6JVNll.jpg",
      slug: "nike-phantom-venom-academy-fg"
    },
    {
      id: 8,
      name: "Nike Mercurial Vapor 13 Elite Tech Craft FG",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "MEN",
      category: "FOOTBALL",
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ["White", "Blue", "Black"],
      price: 145,
      discountPrice:125,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhbwnkor8sxt8qtecgia/mercurial-vapor-13-elite-tech-craft-fg-firm-ground-soccer-cleat-l38JPj.jpg",
      slug: "nike-mercurial-vapor-13-elite-tech-craft-fg"
    },
    {
      id: 9,
      name: "Nike Mercurial Superfly 7 Pro MDS FG",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "MEN",
      category: "FOOTBALL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black", "Brown", "Red"],
      price: 137,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a52a8aec-22dc-4982-961b-75c5f4c72805/mercurial-superfly-7-pro-mds-fg-firm-ground-soccer-cleat-mhcpdN.jpg",
      slug: "nike-mercurial-superfly-7-pro-mds-fg"
    },
    {
      id: 10,
      name: "Nike Air Force 1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "KIDS",
      category: "CASUAL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 90,
      discountPrice:70,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/178b2a46-3ee4-492b-882e-f71efdd53a36/air-force-1-big-kids-shoe-2zqp8D.jpg",
      slug: "nike-air-force-1"
    },
    {
      id: 11,
      name: "Nike Air Max 90",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "KIDS",
      category: "CASUAL",
      size: [6, 7, 8, 9],
      color: ["White", "Blue", "Black"],
      price: 100,
      discountPrice:75,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",
      slug: "nike-air-max-90"
    },
    {
      id: 12,
      name: "Nike Air Max 90 LTR",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "KIDS",
      category: "CASUAL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black", "Red"],
      price: 110,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-620aeb37-1b28-44b0-9b14-5572f8cbc948/air-max-90-ltr-big-kids-shoe-hdNLQ5.jpg",
      slug: "nike-air-max-90-ltr"
    },
    {
      id: 13,
      name: "Nike Joyride Dual Run",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "KIDS",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 110,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33888130-0320-41a1-ba53-a026decd8aa2/joyride-dual-run-big-kids-running-shoe-1HDJF8.jpg",
      slug: "nike-joyride-dual-run"
    },
    {
      id: 14,
      name: "Nike Renew Run",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "NIKE",
      gender: "KIDS",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ["White", "Blue", "Black", "Brown", "Red"],
      price: 80,
      discountPrice:65,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-73e54c0b-11a6-478b-9f90-bd97fcde872d/renew-run-big-kids-running-shoe-5Bpz93.jpg",
      slug: "nike-renew-run"
    },
    {
      id: 16,
      name: "Bridgport Advice",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: "HUSHPUPPIES",
      gender: "MEN",
      category: "FORMAL",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Black"],
      price: 30,
      is_in_inventory: false,
      items_left: 4,
      imageURL: "/assets/running shoes.jpg",
      slug: "bridgport-advice"
    },
    
    
  ];
  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter( p => p.is_in_inventory === true).length;
  totalProductOutOfstock = this.products.filter( p => p.is_in_inventory === false).length;
  

  @Input()
  searchText: string = '';

//   constructor() {}

//  ngOnInit(): void {
   
//  }
  // @Input()
   //Create a property: string = '';
  // enteredSearchValue: string = '';
  // onSearchTextEntered( data : string) {
  //   this.products = this.products;

  // }


  selectedFilterRadioButton: string = 'all';
// prod: { id: number; name: string; description: string; brand: string; gender: string; category: string; size: number[]; color: string[]; price: number; discountPrice?: number; is_in_inventory: boolean; items_left: number; imageURL: string; slug: string; };

  onFilterChanged(value: string){
    console.log(value);
    this.selectedFilterRadioButton = value;


  }

  // setSearchText(value: string){
  //   this.searchText = value;
  //   console.log(this.searchText);
  //  }


// getTotalProducts(){
//   return this.products.length;
// }

// getTotalInStockProducts() {
//   return this.products.filter(product => product.is_in_inventory === true).length;
// }

// getTotalOutOfStockProducts() {
//   return this.products.filter(product => product.is_in_inventory === false).length;
// }


  // productsCountRadioButton: string = 'All';
   


  // onFilterRadioButtonChanged(data: string){
  //   this.productsCountRadioButton = data;
  // }
  
  // onSearchTextEntered(searchValue){
  //   this.enteredSearchValue= searchValue
  // }


}