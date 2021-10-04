package shop.tripn.api.cloud.item.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import shop.tripn.api.cloud.item.repository.ItemRepository;

@RequiredArgsConstructor
@Service
public class ItemServiceImpl implements ItemService{
    private final ItemRepository itemRepository;
}
