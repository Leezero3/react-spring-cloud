package shop.tripn.api.cloud.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import shop.tripn.api.cloud.user.domain.User;
import shop.tripn.api.cloud.user.domain.UserDto;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Transactional
    @Query(value = "select u.user_id userId, u.user_name username, u.password, u.name, u.email, u.reg_date regDate  " +
            "from users u where u.user_name=:username and u.password=:password",
            nativeQuery = true)
    Optional<User> login(@Param("username") String username, @Param("password") String password);
}
