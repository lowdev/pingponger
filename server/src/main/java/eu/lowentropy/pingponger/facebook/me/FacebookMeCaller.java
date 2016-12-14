package eu.lowentropy.pingponger.facebook.me;

import java.net.URI;

import javax.annotation.PostConstruct;

import org.apache.http.client.ResponseHandler;
import org.springframework.stereotype.Service;

import eu.lowentropy.pingponger.rest.BaseRestCaller;
import eu.lowentropy.pingponger.rest.ResponseHandlerBase;
import eu.lowentropy.pingponger.rest.RestCaller;

@Service(RestCaller.FACEBOOK_ME)
public class FacebookMeCaller implements RestCaller<FacebookMe> {

	private BaseRestCaller<FacebookMe> caller;

	@PostConstruct
	public void init() {
		ResponseHandler<FacebookMe> rh =
				new ResponseHandlerBase<FacebookMe>(FacebookMe.class);
		caller = new BaseRestCaller<>(rh);
	}

	@Override
	public FacebookMe call(URI uri) {
		return caller.call(uri);
	}
}
