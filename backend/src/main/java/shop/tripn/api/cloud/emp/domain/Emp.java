package shop.tripn.api.cloud.emp.domain;

import com.sun.istack.NotNull;
import lombok.Data;
import org.springframework.stereotype.Component;
import shop.tripn.api.cloud.dept.domain.Dept;

import javax.persistence.*;

@Data @Entity
@Component @Table(name = "emp")
public class Emp {

    @Id
    private long empNo;

    @Column(length = 10)
    @NotNull
    private String ename;

    @Column(length = 9)
    @NotNull
    private String job;

    @Column(length = 13)
    @NotNull
    private long mgr;

    @Column(length = 13)
    @NotNull
    private String hireDate;

    @Column
    @NotNull
    private long sal;

    @Column
    @NotNull
    private long comm;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "deptNo")
    private Dept dept;


}
