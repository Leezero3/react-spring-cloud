package shop.tripn.api.cloud.dept.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import shop.tripn.api.cloud.emp.domain.Emp;

public interface DeptRepository extends JpaRepository<Emp, Long> {


}
