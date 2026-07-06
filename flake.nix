{
  description = "Node.js development environment";
  inputs = { nixpkgs.url = "github:NixOs/nixpkgs/release-25.11"; };
  outputs = { nixpkgs, ... }:
    let
      supportedSystems = [ "x86_64-linux" "aarch64-darwin" ];
      forAllSystems = nixpkgs.lib.genAttrs supportedSystems;
    in {
      devShells = forAllSystems (system:
        let pkgs = nixpkgs.legacyPackages.${system};
        in { default = pkgs.mkShell { packages = [ pkgs.nodejs_24 ]; }; });
    };
}
