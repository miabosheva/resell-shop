import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  public productId: number = -1;

  constructor(private route: ActivatedRoute,
    private productService: ProductsService,
    private alertifly: AlertifyService,
    private router: Router) { }

  ngOnInit() {
    this.productId = Number(this.route.snapshot.params['id']);
    console.log(this.productId);
    this.productService.deleteProduct(this.productId).subscribe(
      () => {
        console.log('Product deleted successfully');
        this.alertifly.success("Successfully deleted.")
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error deleting product:', error);
        this.alertifly.error("There was an error deleting this product.");
        this.router.navigate(['/']);
      }
    );
  }
}
