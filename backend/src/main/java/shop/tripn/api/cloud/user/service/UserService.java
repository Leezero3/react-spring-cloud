package shop.tripn.api.cloud.user.service;

import org.springframework.stereotype.Repository;
import shop.tripn.api.cloud.user.domain.User;

import java.util.Optional;

@Repository
public interface UserService {
    Optional<User> findById(long userId);

}
