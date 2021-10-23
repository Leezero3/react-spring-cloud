package shop.tripn.api.cloud.user.domain;

import com.sun.istack.NotNull;
import lombok.Data;
import org.springframework.stereotype.Component;
import shop.tripn.api.cloud.board.domain.Article;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data @Component @Table(name = "users")
public class User {
//
//    @Id @Column(name = "user_id")
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private long userId;
//
//    @NotNull @Column(name = "user_name", length =50)
//    private String username;
//
//    @NotNull @Column(length = 10)
//    private String password;
//
//    @NotNull @Column(length = 50)
//    private String name;
//
//    @NotNull @Column(length = 50)
//    private String email;
//
//    @NotNull @Column(name = "reg_date", length = 20)
//    private String regDate;
//
//    @OneToMany(mappedBy = "user",  fetch = FetchType.EAGER) // 내가 부모다
//    private List<Article> articleList = new ArrayList<>();

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;
    @Column private @NotNull String username;
    @Column private @NotNull String password;
    @Column private @NotNull String name;
    @Column private @NotNull String email;
    @Column(name = "reg_date") @NotNull private String regDate;
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<Article> articleList = new ArrayList<>();




}