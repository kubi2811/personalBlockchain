import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    ArrayList<Block> blockchain = new ArrayList<>();
    public static void main(String[] args) {
        String[] genesisTransactions = {"Đây là block đầu tiên nên thông tin trong này sẽ là hardcode", "đoạn text này không được phép thay đổi"};
        Block genesisBlock = new Block(0, genesisTransactions);

        String[] transaction2 = {"A chuyển cho B 10 coin"};
        Block block2 = new Block(genesisBlock.getBlockHash(), transaction2);

        System.out.println(genesisBlock.getBlockHash());
        System.out.println(block2.getBlockHash());
    }
}