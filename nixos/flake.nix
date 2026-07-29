{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-26.05";
    silentSDDM = {
      url = "github:uiriansan/SilentSDDM";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
  outputs = { self, nixpkgs, silentSDDM }: {
    nixosConfigurations.X712 = nixpkgs.lib.nixosSystem {
      system = "x86_64-linux";
      specialArgs = { inherit silentSDDM; };
      modules = [ ./configuration.nix ];
    };
  };
}
