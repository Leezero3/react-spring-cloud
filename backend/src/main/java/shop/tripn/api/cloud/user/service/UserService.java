package shop.tripn.api.cloud.user.service;

import org.springframework.stereotype.Repository;
import shop.tripn.api.cloud.user.domain.User;
import shop.tripn.api.cloud.user.domain.UserDto;

import java.util.Optional;

@Repository
public interface UserService {
    Optional<User> findById(long userId);
    Optional<User> login(String username, String password);

}
