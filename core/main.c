#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

void xor_encrypt(char *data, const char *key) {
    for (int i = 0; data[i] != '\0'; i++) {
        data[i] ^= key[i % strlen(key)];
    }
}

void log_threat(const char *input, const char *level) {
    FILE *log = fopen("../logs/threats.log", "a");
    FILE *elog = fopen("../logs/threats_encrypted.threatlog", "a");

    time_t now = time(NULL);
    char timestamp[64];
    strftime(timestamp, sizeof(timestamp), "%Y-%m-%d %H:%M:%S", localtime(&now));

    char entry[512];
    snprintf(entry, sizeof(entry), "[%s] [%s] %s\n", timestamp, level, input);

    fprintf(log, "%s", entry);

    char encrypted[512];
    strcpy(encrypted, entry);
    xor_encrypt(encrypted, "NSAKEY123");
    fprintf(elog, "%s\n", encrypted);

    fclose(log);
    fclose(elog);
}

int main() {
    char input[256], level[16];
    printf("=== Nightmare FrameX NSA CLI ===\n");
    while (1) {
        printf("\nEnter threat (or 'exit'): ");
        fgets(input, sizeof(input), stdin);
        input[strcspn(input, "\n")] = 0;
        if (strcmp(input, "exit") == 0) break;

        printf("Threat level [low|med|high]: ");
        fgets(level, sizeof(level), stdin);
        level[strcspn(level, "\n")] = 0;

        log_threat(input, level);
        printf("Logged %s level threat: %s\n", level, input);
    }
    return 0;
}
