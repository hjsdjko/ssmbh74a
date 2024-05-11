package com.entity.view;

import com.entity.ChimaxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 尺码信息
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-03-16 14:45:49
 */
@TableName("chimaxinxi")
public class ChimaxinxiView  extends ChimaxinxiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public ChimaxinxiView(){
	}
 
 	public ChimaxinxiView(ChimaxinxiEntity chimaxinxiEntity){
 	try {
			BeanUtils.copyProperties(this, chimaxinxiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
