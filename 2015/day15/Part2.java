import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.LinkedList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class Part2 {

	public static void main(String[] args) throws IOException {

		String regex = "-*\\d+";
		Pattern pattern = Pattern.compile(regex);

		List<Data> data = Files
				.lines(Paths.get("./Day15Input.txt"))
				.map(line -> {
					String name = line.split(":")[0];
					Matcher matcher = pattern.matcher(line);
					LinkedList<Integer> numbers = new LinkedList<>();
					while (matcher.find()) {
						numbers.add(Integer.valueOf(matcher.group()));
					}
					return new Data(name, numbers.get(0), numbers.get(1), numbers.get(2), numbers.get(3),
							numbers.get(4));
				}).collect(Collectors.toList());

		
		long max = 0;
		
		for (int sugar = 0; sugar < 100; sugar++) {
			for (int sprinkles = 0; sprinkles < 100 - sugar; sprinkles++) {
				for (int candy = 0; candy < 100 - sugar - sprinkles; candy++) {
					int chocolate = 100 - sugar - sprinkles - candy;
					
					int totalCapacity = sugar * data.get(0).capacity + sprinkles * data.get(1).capacity
										+ candy * data.get(2).capacity + chocolate * data.get(3).capacity;
					int totalDurability = sugar * data.get(0).durability + sprinkles * data.get(1).durability
							+ candy * data.get(2).durability + chocolate * data.get(3).durability;
					int totalFlavour = sugar * data.get(0).flavour + sprinkles * data.get(1).flavour
							+ candy * data.get(2).flavour + chocolate * data.get(3).flavour;
					int totalTexture = sugar * data.get(0).texture + sprinkles * data.get(1).texture
							+ candy * data.get(2).texture + chocolate * data.get(3).texture;
					
					int calories= sugar * data.get(0).calories + sprinkles * data.get(1).calories
							+ candy * data.get(2).calories + chocolate * data.get(3).calories;
					
					long sum = (totalCapacity > 0 ?  totalCapacity : 0)
								* (totalDurability > 0 ?  totalDurability : 0)
								* (totalFlavour > 0 ?  totalFlavour : 0)
								* (totalTexture > 0 ?  totalTexture : 0);

					if (sum > max && calories == 500) {
						max = sum;
					}
				}
			}
		}
		System.out.println(max);
	}
}
