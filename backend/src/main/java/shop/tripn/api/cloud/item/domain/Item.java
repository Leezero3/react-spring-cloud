package shop.tripn.api.cloud.item.domain;

import com.sun.istack.NotNull;
import lombok.Data;
import org.springframework.stereotype.Component;
import shop.tripn.api.cloud.board.domain.Article;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data @Component @Table(name = "items")
public class Item {

    @Id @Column(name = "item_id") @GeneratedValue
    private long itemId;

    @NotNull @Column(name = "item_brand", length = 20)
    private String itemBrand;

    @NotNull @Column(name = "item_name", length = 50)
    private String itemName;

    @NotNull @Column(name = "item_color", length = 20)
    private String itemColor;

    @NotNull @Column(name = "released_date", length = 20)
    private String releasedDate;

    @OneToMany(mappedBy = "item") // 자식에 엔티티에 있는 인스턴스 이름
    private List<Article> articleList = new ArrayList<>();

}