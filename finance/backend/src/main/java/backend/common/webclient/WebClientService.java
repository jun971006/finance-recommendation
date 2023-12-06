package backend.common.webclient;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@Slf4j
public class WebClientService {

    public String test() {
        WebClient webClient = WebClient.builder()
                .baseUrl("http://localhost:8000")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();

        String block = webClient.get()
                .uri("/api/python/test/")
                .retrieve()
                .bodyToMono(String.class)
                .block();
        log.info("파이썬 통신 테스트 : {}", block);

        return block;
    }
}
