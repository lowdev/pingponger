package eu.lowentropy.articleannotater.facebook.auth;

import java.net.URI;
import java.net.URISyntaxException;

import org.apache.http.client.utils.URIBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

	@Value("${facebook.secret}")
	private String facebookAppSecret;

	@Autowired
	private FacebookOauthCaller oauthCaller;

	@RequestMapping(value = "/auth/facebook", method = RequestMethod.POST,
			produces = "application/json", consumes = "application/json")
    public Token authToFacebook(@RequestBody Payload payload) {
		AccessToken accessToken = oauthCaller.call(getURI(payload));
		return new Token(accessToken.getAccessToken());
    }

	private URI getURI(Payload payload) {
		try {
			return new URIBuilder()
					.setScheme("https")
			        .setHost("graph.facebook.com")
			        .setPath("/v2.3/oauth/access_token")
			        .setParameter("code", payload.getCode())
			        .setParameter("client_id", payload.getClientId())
			        .setParameter("client_secret", facebookAppSecret)
			        .setParameter("redirect_uri", payload.getRedirectUri())
			        .build();
		} catch (URISyntaxException e1) {
			throw new IllegalArgumentException(e1);
		}
	}
}
