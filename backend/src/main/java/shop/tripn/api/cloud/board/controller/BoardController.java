package shop.tripn.api.cloud.board.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;
import shop.tripn.api.cloud.board.service.BoardService;

@RequiredArgsConstructor // 생성자 만듬
@RestController // @Controller, 진화된 버전 ->인텔리제이 안에 화면을 나타내는 것이 아닐 때 ex)리액트와 연결해주는 역할을 한다
public class BoardController {
    private final BoardService boardService;
}
