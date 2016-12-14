package eu.lowentropy.pingponger.facebook.auth;

import com.google.gson.annotations.SerializedName;

public class AccessToken {

	@SerializedName("access_token")
	private String accessToken;

	@SerializedName("token_type")
	private String tokenType;

	@SerializedName("expires_in")
	private Double expiresIn;

	public String getAccessToken() {
		return accessToken;
	}

	public String getTokenType() {
		return tokenType;
	}

	public Double getExpiresIn() {
		return expiresIn;
	}
}
