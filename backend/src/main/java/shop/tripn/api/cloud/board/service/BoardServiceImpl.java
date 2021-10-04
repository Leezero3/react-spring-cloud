package shop.tripn.api.cloud.board.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import shop.tripn.api.cloud.board.repository.BoardRepository;

@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService{
    private final BoardRepository boardRepository;
}
