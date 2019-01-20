public class Day10 {

	public static void main(String[] args) {
		String input = "3113322113";

		for (int n = 0; n < 40; n++) {
			StringBuffer output = new StringBuffer();
			char first = input.charAt(0);
			int count = 1;
			for (int i = 1; i < input.length(); i++) {
				char ch = input.charAt(i);
				if (ch == first)
					count++;
				else {
					output.append(count + "" + first);
					first = ch;
					count = 1;
				}
			}
			output.append(count + "" + first);
			input = output.toString();
		}
		System.out.println(input.length());
	}

}
