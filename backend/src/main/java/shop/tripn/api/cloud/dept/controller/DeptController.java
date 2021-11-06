package shop.tripn.api.cloud.dept.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import shop.tripn.api.cloud.common.CommonController;
import shop.tripn.api.cloud.dept.domain.Dept;
import shop.tripn.api.cloud.dept.domain.DeptInfo;
import shop.tripn.api.cloud.dept.repository.DeptRepository;

import java.util.List;
import java.util.Optional;

public class DeptController implements CommonController<Dept, Long> {



    @Override
    public ResponseEntity<List<Dept>> findAll() {
        return null;
    }

    @Override
    public ResponseEntity<Dept> getById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<String> save(Dept entity) {
        return null;
    }

    @Override
    public ResponseEntity<Optional<Dept>> findById(Long id) {
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