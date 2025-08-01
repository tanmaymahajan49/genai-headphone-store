package com.headphonestore.services;

import com.headphonestore.models.Purchase;
import com.headphonestore.models.Product;
import com.headphonestore.repositories.PurchaseRepository;
import com.headphonestore.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PurchaseService {
    @Autowired
    private PurchaseRepository purchaseRepository;
    @Autowired
    private ProductRepository productRepository;

    @Transactional
    public String purchaseProduct(Long userId, Long productId, Integer quantity) {
        Product product = productRepository.findById(productId).orElse(null);
        if (product == null) {
            return "Product not found";
        }
        if (product.getStock() < quantity) {
            return "Insufficient stock";
        }
        double totalPrice = product.getPrice() * quantity;
        product.setStock(product.getStock() - quantity);
        productRepository.save(product);
        Purchase purchase = new Purchase();
        purchase.setUserId(userId);
        purchase.setProductId(productId);
        purchase.setQuantity(quantity);
        purchase.setTotalPrice(totalPrice);
        purchaseRepository.save(purchase);
        return "Purchase successful";
    }
}
