package com.pavan.controller;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.pavan.model.Images;
import com.pavan.repository.UploadRepo;

import jakarta.servlet.http.HttpSession;

import java.nio.file.*;

@Controller
public class HomeController {
	
	@Autowired
	private UploadRepo upRepo;

	@GetMapping("/")
	public String index(Model m) {
		List<Images> list=upRepo.findAll();
		m.addAttribute("list",list);
		return "index";
	}
	@PostMapping("/imageUpload")
	public String imageUpload(@RequestParam MultipartFile img,HttpSession session) {
		System.out.println(img.getOriginalFilename());
		
		Images im=new Images();
		im.setImageName(img.getOriginalFilename());
		Images uploadImg=upRepo.save(im);
		if(uploadImg!=null) {
			try {
				 File saveFile=new ClassPathResource("static/img").getFile();
				 Path path=Paths.get(saveFile.getAbsolutePath()+File.separator+img.getOriginalFilename());
				 System.out.println(path);
				 Files.copy(img.getInputStream(), path,StandardCopyOption.REPLACE_EXISTING);
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
		
		//session.setAttribute("msg","Image Upload Successfully");
		
		return "redirect:/";
	}
	

}
