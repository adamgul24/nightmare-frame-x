import javax.swing.*;
import java.io.*;
import java.util.*;

public class Dashboard {
    public static void main(String[] args) {
        JFrame frame = new JFrame("NSA Log Viewer");
        JTextArea area = new JTextArea();
        try (Scanner sc = new Scanner(new File("../logs/threats.log"))) {
            while (sc.hasNextLine()) {
                String line = sc.nextLine();
                if (line.contains("high")) area.append("🚨 " + line + "\n");
                else area.append(line + "\n");
            }
        } catch (Exception e) {
            area.setText("Log read error.");
        }
        frame.add(new JScrollPane(area));
        frame.setSize(500, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
