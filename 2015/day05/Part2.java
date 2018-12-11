import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.function.Predicate;
import java.util.stream.IntStream;

public class Part2 {

	public static void main(String[] args) throws IOException {

		Predicate<String> isSequencePresent =  input -> 
												 IntStream.range(0, input.length() - 2)
													.filter(i -> input.substring(i + 2).contains(input.substring(i, i + 2)))
													.findFirst()
													.isPresent();

		Predicate<String> isAppearedTwice = input -> 
								  		IntStream.range(0, input.length() - 2)
										.filter(i -> input.charAt(i) == input.charAt(i + 2))
										.findFirst()
										.isPresent();
		
		
		long niceInput = Files.lines(Paths.get("Day5Input.txt"))
								.filter(isSequencePresent)
								.filter(isAppearedTwice)
								.count();
							
		System.out.println(niceInput);
	}
}
