package shop.tripn.api.cloud.item.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;
import shop.tripn.api.cloud.item.service.ItemService;

@RestController
@RequiredArgsConstructor
public class ItemController {
    private final ItemService itemService;
}
