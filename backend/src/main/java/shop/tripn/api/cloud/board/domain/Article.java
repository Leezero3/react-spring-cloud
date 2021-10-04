// 데이터 베이스의 양방향을 허용하는 구간
package shop.tripn.api.cloud.board.domain;

import com.sun.istack.NotNull;
import lombok.Data;
import org.springframework.stereotype.Component;
import shop.tripn.api.cloud.item.domain.Item;
import shop.tripn.api.cloud.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import javax.persistence.*;

//@NoArgsConstructor // 디폴트 생성자(파라미터가 없는 생성자) 만듬
// @AllArgsConstructor // 모든 생성자 만듬
@Entity // db 테이블 생성하겠다 (db프로그램에서 create table 명령어 안쓰고)
@Data @Component @Table(name = "articles") // getset/ 캡슐화 / 테이블 이름을 준다
public class Article {
    @Id //pk pk는 @notnull 없어도 기본적으로 낫널임
    @Column(name = "article_id") // 한 줄의 콜롬의 이름을 주고
    @GeneratedValue // 시리얼 넘버같은 키를 줌
    private long articleId;

    @NotNull @Column (length = 50)// 칸을 비워둘 수 없다(notnull) / 이름이 같으면 생략 가능
    private String title;

    @NotNull @Column (length = 200)
    private String content;

    @NotNull @Column(name = "written_date",length = 20)
    private String writtenDate;

    @NotNull @Column(name = "user_id")
    private int userId;

    @NotNull @Column(name = "item_id")
    private int itemId;

    @ManyToOne(fetch = FetchType.LAZY) // 내가 자식이다 / 요청하기 전에는 받아오지 마라 why? 메모리를 많이 잡아먹으니까
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY) // 내가 자식이다
    @JoinColumn(name = "item_id", insertable = false, updatable = false) // FK이기 때문에 이곳에서 업데이트나 삭제 불가능
    private Item item;


}
