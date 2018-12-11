import java.io.IOException;
import java.lang.reflect.Array;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.OptionalInt;
import java.util.function.Predicate;
import java.util.stream.IntStream;

public class Part1 {

	public static void main(String[] args) throws IOException {

		Predicate<String> abCharacters = input -> !input.contains("ab");
		Predicate<String> cdCharacters = input -> !input.contains("cd");
		Predicate<String> pqCharacters = input -> !input.contains("pq");
		Predicate<String> xyCharacters = input -> !input.contains("xy");

		Predicate<String> isSequencePresent = abCharacters
												.and(cdCharacters)
												.and(pqCharacters)
												.and(xyCharacters);

		Predicate<String> isAppearedTwice = input -> 
								  		IntStream.range(0, input.length() - 1)
										.filter(i -> input.charAt(i) == input.charAt(i + 1))
										.findFirst()
										.isPresent();
		
		Predicate<String> hasAtleast3Vowels = input -> {
			int count = 0;
			for (int i = 0; i < input.length(); i++) {
				switch(input.charAt(i)) {
					case 'a': 
					case 'e': 
					case 'i': 
					case 'o': 
					case 'u': count++;
				}
			}
			return count >= 3;
		};
		
		
		long niceInput = Files.lines(Paths.get("Day5Input.txt"))
			.filter(isSequencePresent)
			.filter(isAppearedTwice)
			.filter(hasAtleast3Vowels)
			.count();
		
		System.out.println(niceInput);
	}
}
