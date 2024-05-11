package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.KuanshixinxiDao;
import com.entity.KuanshixinxiEntity;
import com.service.KuanshixinxiService;
import com.entity.vo.KuanshixinxiVO;
import com.entity.view.KuanshixinxiView;

@Service("kuanshixinxiService")
public class KuanshixinxiServiceImpl extends ServiceImpl<KuanshixinxiDao, KuanshixinxiEntity> implements KuanshixinxiService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<KuanshixinxiEntity> page = this.selectPage(
                new Query<KuanshixinxiEntity>(params).getPage(),
                new EntityWrapper<KuanshixinxiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<KuanshixinxiEntity> wrapper) {
		  Page<KuanshixinxiView> page =new Query<KuanshixinxiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<KuanshixinxiVO> selectListVO(Wrapper<KuanshixinxiEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public KuanshixinxiVO selectVO(Wrapper<KuanshixinxiEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<KuanshixinxiView> selectListView(Wrapper<KuanshixinxiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public KuanshixinxiView selectView(Wrapper<KuanshixinxiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
