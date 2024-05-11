package com.entity.view;

import com.entity.KuanshixinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 款式信息
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-03-16 14:45:49
 */
@TableName("kuanshixinxi")
public class KuanshixinxiView  extends KuanshixinxiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public KuanshixinxiView(){
	}
 
 	public KuanshixinxiView(KuanshixinxiEntity kuanshixinxiEntity){
 	try {
			BeanUtils.copyProperties(this, kuanshixinxiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
