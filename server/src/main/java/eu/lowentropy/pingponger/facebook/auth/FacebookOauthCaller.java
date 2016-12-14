package eu.lowentropy.pingponger.facebook.auth;

import java.net.URI;

import javax.annotation.PostConstruct;

import org.apache.http.client.ResponseHandler;
import org.springframework.stereotype.Service;

import eu.lowentropy.pingponger.rest.BaseRestCaller;
import eu.lowentropy.pingponger.rest.ResponseHandlerBase;
import eu.lowentropy.pingponger.rest.RestCaller;

@Service(RestCaller.FACEBOOK_OAUTH)
public class FacebookOauthCaller implements RestCaller<AccessToken> {

	private BaseRestCaller<AccessToken> caller;

	@PostConstruct
	public void init() {
		ResponseHandler<AccessToken> rh =
				new ResponseHandlerBase<AccessToken>(AccessToken.class);
		caller = new BaseRestCaller<>(rh);
	}

	@Override
	public AccessToken call(URI uri) {
		return caller.call(uri);
	}
}
