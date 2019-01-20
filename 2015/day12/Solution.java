
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Iterator;
import java.util.regex.Pattern;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;

public class Day12Part01 {
	
	public static void main(String[] args) throws IOException {
		String NUMBER = "-*\\d+";
		Pattern pattern = Pattern.compile(NUMBER);

		int data =  Files.lines(Paths.get("Day12.txt"))		
			 .map(pattern::matcher)
			 .map(matcher -> {
				 int sum = 0;
				 while (matcher.find()) {
					sum += Integer.valueOf(matcher.group());
				 }
				 return sum;
			 })
			 .reduce(0, Math::addExact)
			 .intValue();
		System.out.println("Part1 solution: " + data);

		
		ObjectMapper mapper = new ObjectMapper();
		JsonNode readTree = mapper.readTree(new File("Day12.txt"));
		System.out.println("Part2 solution: " + readNoRedNodes(readTree, 0));
	}
	
	private static int readNoRedNodes(JsonNode node, int sum) {
		int result = sum;
		
		if (node.isInt())
				result += node.asInt();
		
		if (node.isArray()) {
			for (JsonNode nd : node) {
				result += readNoRedNodes(nd, sum);
			}
		}
				
		if (node.isObject() && !isRedNode(node)) {
			Iterator<JsonNode> it = node.getElements();
			while (it.hasNext()) {
				result += readNoRedNodes(it.next(), sum);
			}
		}
		return result;
	}

	private static boolean isRedNode(JsonNode node) {
		 Iterator<JsonNode> it = node.getElements();
		 while (it.hasNext()) {
			 	if ("red".equalsIgnoreCase(it.next().asText())) {
			 		return true;
			 	}
		 }
		return false;
	}
}






