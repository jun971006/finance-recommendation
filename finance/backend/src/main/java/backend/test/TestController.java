package backend.test;

import backend.common.webclient.WebClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api/test")
@RequiredArgsConstructor
public class TestController {

    private final WebClientService webClientService;

    @GetMapping("/python")
    public ResponseEntity<String> test() {

        String test = webClientService.test();

        return ResponseEntity.ok(test);
    }
}
