package shop.tripn.api.cloud.board.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import shop.tripn.api.cloud.board.domain.Article;
import shop.tripn.api.cloud.board.repository.BoardRepository;
import shop.tripn.api.cloud.board.service.BoardService;
import shop.tripn.api.cloud.common.CommonController;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor // 생성자 만듬
@RestController // @Controller, 진화된 버전 ->인텔리제이 안에 화면을 나타내는 것이 아닐 때 ex)리액트와 연결해주는 역할을 한다
public class BoardController implements CommonController<Article, Long> {
    private final BoardService boardService;
    private final BoardRepository boardRepository;

    @Override
    public ResponseEntity<List<Article>> findAll() {
        return ResponseEntity.ok(boardRepository.findAll());
    }

    @Override
    public ResponseEntity<Article> getById(Long id) {
        return ResponseEntity.ok(boardRepository.getById(id));
    }

    @Override
    public ResponseEntity<String> save(Article article) {
        boardRepository.save(article);
        return ResponseEntity.ok("SUCCESS");
    }

    @Override
    public ResponseEntity<Optional<Article>> findById(Long id) {
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
