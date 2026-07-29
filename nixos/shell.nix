{ config, pkgs, ... }:

{
  # Define a user account. Don't forget to set a password with ‘passwd’.
  users.users."skynixty" = {
    isNormalUser = true;
    description = "skynixty";
    extraGroups = [ "networkmanager" "wheel" ];
    shell = pkgs.zsh;
    packages = with pkgs; [
      kdePackages.kate
    #  thunderbird
    ];
  };

  # Zsh: autosuggestions, autocorrect, shared history across terminals, custom prompt.
  programs.zsh = {
    enable = true;
    enableCompletion = true;
    autosuggestions.enable = true;
    syntaxHighlighting.enable = true;

    histSize = 10000;
    histFile = "$HOME/.zsh_history";

    shellInit = ''
      # autocorrect
      setopt CORRECT
      setopt CORRECT_ALL

      # cross-terminal shared history
      setopt SHARE_HISTORY
      setopt APPEND_HISTORY
      setopt INC_APPEND_HISTORY
      setopt HIST_IGNORE_DUPS

      # prompt
      PS1='[SkyNixty@X712 ~}> '
    '';
  };

  users.defaultUserShell = pkgs.zsh;
}
