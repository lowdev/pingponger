package eu.lowentropy.pingponger.facebook.auth;

public class Payload {
	String clientId;

	String redirectUri;

	String code;

	public String getClientId() {
		return clientId;
	}

	public String getRedirectUri() {
		return redirectUri;
	}

	public String getCode() {
		return code;
	}
}
