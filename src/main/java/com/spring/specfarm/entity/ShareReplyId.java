package com.spring.specfarm.entity;

import java.io.Serializable;

import lombok.Data;

@Data
public class ShareReplyId implements Serializable {
	private int shareIdx;
	private String userId;
}
