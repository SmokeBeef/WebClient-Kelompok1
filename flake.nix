{
  description = "Node.js development environment";
  inputs = { nixpkgs.url = "github:NixOs/nixpkgs/release-25.11"; };
  outputs = { nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system; };
    in {
      devShells.${system}.default =
        pkgs.mkShell { packages = [ pkgs.nodejs_24 ]; };
    };
}
