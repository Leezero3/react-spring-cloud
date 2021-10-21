package shop.tripn.api.cloud.item.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import shop.tripn.api.cloud.common.CommonController;
import shop.tripn.api.cloud.item.domain.Item;
import shop.tripn.api.cloud.item.service.ItemService;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class ItemController implements CommonController<Item, Long> {
    private final ItemService itemService;

    @Override
    public ResponseEntity<List<Item>> findAll() {
        return null;
    }

    @Override
    public ResponseEntity<Item> getById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<String> save(Item entity) {
        return null;
    }

    @Override
    public ResponseEntity<Optional<Item>> findById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<Boolean> existsById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<Long> count() {
        return null;
    }

    @Override
    public ResponseEntity<String> deleteById(Long id) {
        return null;
    }
}
