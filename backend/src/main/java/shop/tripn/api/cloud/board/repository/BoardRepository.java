package shop.tripn.api.cloud.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import shop.tripn.api.cloud.board.domain.Article;

@Repository // jpa는 마이바티스의 역할을 해주는 딱새, 여기선 보이지 않음, @Repository가 전자정부의 맵퍼 역할!
public interface BoardRepository extends JpaRepository<Article, Long> {

}
