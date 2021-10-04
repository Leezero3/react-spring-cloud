package shop.tripn.api.cloud.item.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import shop.tripn.api.cloud.item.domain.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
}
