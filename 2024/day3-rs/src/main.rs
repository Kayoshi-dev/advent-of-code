use std::fs;

fn main() {
    let content = fs::read_to_string("src/input.txt").expect("Unable to read file");

    let re = regex::Regex::new(r"mul\((\d+),(\d+)\)").unwrap();

    let matches: Vec<_> = re.captures_iter(&content).collect();

    let mut global_counter = 0;

    if matches.is_empty() {
        println!("No matches found");
    } else {
        for caps in matches {
            let nums: Vec<i32> = (1..=2)
                .map(|i| {
                    caps.get(i)
                        .expect("Missing capture group")
                        .as_str()
                        .parse()
                        .expect("Failed to parse number")
                })
                .collect();

            global_counter += nums[0] * nums[1];
        }

        println!("result: {}", global_counter);
    }
}
