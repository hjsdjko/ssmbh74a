package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.KuanshixinxiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.KuanshixinxiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.KuanshixinxiView;


/**
 * 款式信息
 *
 * @author 
 * @email 
 * @date 2022-03-16 14:45:49
 */
public interface KuanshixinxiService extends IService<KuanshixinxiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<KuanshixinxiVO> selectListVO(Wrapper<KuanshixinxiEntity> wrapper);
   	
   	KuanshixinxiVO selectVO(@Param("ew") Wrapper<KuanshixinxiEntity> wrapper);
   	
   	List<KuanshixinxiView> selectListView(Wrapper<KuanshixinxiEntity> wrapper);
   	
   	KuanshixinxiView selectView(@Param("ew") Wrapper<KuanshixinxiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<KuanshixinxiEntity> wrapper);
   	

}

