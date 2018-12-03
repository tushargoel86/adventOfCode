package adventOfCode2015;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Day2 {

	public static void main(String[] args) throws IOException {
		Integer totalArea = Files.lines(Paths.get("C:\\Users\\tgoel\\Documents\\docs\\java-script\\advent-of-code\\2015\\day02\\Day2-input.txt"))
			.map(line -> line.split("x"))
			.map(Prism::area)
			.reduce(Math::addExact)
			.get();
 			
		System.out.println("Total Area: " + totalArea);
	}
}

class Prism {

	public static int area(String []input) {
		int len = Integer.valueOf(input[0]);
		int wid = Integer.valueOf(input[1]);
		int hi = Integer.valueOf(input[2]);
		int area = 2 * (len * wid + wid * hi + hi * len);
		area += Math.min(len*wid, Math.min(wid*hi, hi*len));
		return area;
	}
	
}
